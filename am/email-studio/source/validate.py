from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit
import json,re
R=Path(__file__).resolve().parents[1]
class Audit(HTMLParser):
 def __init__(self): super().__init__();self.errors=[];self.placeholders=0;self.images=0;self.count={}
 def handle_starttag(self,t,a):
  d=dict(a);self.count[t]=self.count.get(t,0)+1
  if t in ['script','iframe','form']:self.errors.append('Forbidden email element '+t)
  if t=='table' and d.get('role')!='presentation':self.errors.append('Missing table role')
  for k in ['href','src']:
   v=d.get(k,'')
   if re.search(r'clk\.12thman|[?&](elq\w*|ehash|rid|aid|pid|RSRC|RDAT)=',v,re.I):self.errors.append('Tracking URL')
  if t=='a':
   if urlsplit(d.get('href','')).hostname!='example.invalid':self.errors.append('Unapproved anchor')
   else:self.placeholders+=1
  if t=='img':
   self.images+=1
   if not (R/'templates'/d['src']).resolve().is_file():self.errors.append('Missing image '+d['src'])
   if 'alt' not in d:self.errors.append('Missing alt')
results=[]
for f in sorted((R/'templates').glob('*.html')):
 a=Audit();s=f.read_text();a.feed(s)
 for t in ['html','head','body','title']:
  if a.count.get(t)!=1:a.errors.append('Document structure '+t)
 for t in ['table','tr','td']:
  if len(re.findall(r'<'+t+r'\b',s))!=len(re.findall(r'</'+t+'>',s)):a.errors.append('Unbalanced '+t)
 if '756 Houston Street' not in s:a.errors.append('Missing postal address')
 if len(s.encode())>=80000:a.errors.append('HTML exceeds local 80KB target')
 if not f.with_suffix('.txt').exists():a.errors.append('Missing text companion')
 begins=re.findall(r'<!-- BEGIN ([A-Z]+-\d+)',s);ends=re.findall(r'<!-- END ([A-Z]+-\d+)',s)
 if begins!=ends:a.errors.append('Module boundary mismatch')
 results.append(dict(template=f.name,bytes=len(s.encode()),images=a.images,placeholderLinks=a.placeholders,errors=a.errors,sourceChecks='PASS' if not a.errors else 'FAIL',productionReady=False))
# scan every delivered HTML file, including sanitized reference, for tracking identifiers in URLs
privacy=[]
for f in R.rglob('*.html'):
 s=f.read_text()
 if re.search(r'(?:https?://[^\s"<>]*[?&](?:elq\w*|ehash)=|https?://clk\.12thman)',s,re.I):privacy.append(str(f.relative_to(R)))
report={'templates':results,'privacyFailures':privacy,'emailClientTests':'NOT RUN','eloquaImport':'NOT RUN','sendStatus':'BLOCKED: placeholders, asset remapping, approvals and delivery validation required'}
(R/'validation-results.json').write_text(json.dumps(report,indent=2))
print(json.dumps(report,indent=2))
assert all(not x['errors'] for x in results) and not privacy
