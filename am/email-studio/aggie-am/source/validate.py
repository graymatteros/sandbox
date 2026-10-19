from pathlib import Path
from html.parser import HTMLParser
from PIL import Image
import json,re
R=Path(__file__).resolve().parents[1]
class Audit(HTMLParser):
 def __init__(self):super().__init__();self.errors=[];self.images=0;self.events=0;self.values=0;self.headers=0
 def handle_starttag(self,t,a):
  d=dict(a)
  if t in ['script','iframe','form']:self.errors.append('Unexpected '+t)
  if t=='table' and d.get('id')!='schedule' and d.get('role')!='presentation':self.errors.append('Missing layout table role')
  if t=='th' and d.get('scope')=='col':self.headers+=1
  if t=='tr' and d.get('class')=='event':self.events+=1
  if t=='span' and d.get('class')=='field-value':self.values+=1
  if t=='img':
   self.images+=1
   if not (R/d.get('src','')).is_file():self.errors.append('Missing image '+d.get('src',''))
   if not d.get('alt'):self.errors.append('Missing alt')
  for k in ['src','href']:
   if re.search(r'[?&](elq\w*|ehash)=|clk\.12thman',d.get(k,''),re.I):self.errors.append('Recipient tracking')
s=(R/'email.html').read_text();a=Audit();a.feed(s)
for t in ['table','tr','td']:
 if len(re.findall('<'+t+r'\b',s))!=len(re.findall('</'+t+'>',s)):a.errors.append('Unbalanced '+t)
assert a.events==13 and a.values==78 and a.headers==6
im=Image.open(R/'assets/aggie-am-sunrise.gif')
assert im.n_frames>1
assert len(s.encode())<80000
assert not a.errors,a.errors
report=dict(htmlBytes=len(s.encode()),images=a.images,events=a.events,scheduleHeaders=a.headers,scheduleValues=a.values,logoFrames=im.n_frames,logoBytes=(R/'assets/aggie-am-sunrise.gif').stat().st_size,errors=a.errors,eloquaImport='NOT PERFORMED',inboxValidation='NOT PERFORMED')
(R/'source-checks.json').write_text(json.dumps(report,indent=2));print(json.dumps(report,indent=2))
