"""Deterministic motion study using the original wordmark pixels; no lettering redrawn."""
from PIL import Image, ImageChops
from pathlib import Path
R=Path(__file__).resolve().parents[1]
im=Image.open(R/'assets/am-light-logo.png').convert('RGBA')
# Sun is isolated above the i; the letterforms and AM are left untouched.
box=(840,0,930,70)
sun=im.crop(box)
base=im.copy();base.paste((0,0,0,0),box)
bounds=(465,0,1340,246)
BG=(248,245,238,255)
def render(layer):
 out=Image.new('RGBA',im.size,BG);out.alpha_composite(layer)
 out=out.crop(bounds).resize((875,246),Image.Resampling.LANCZOS)
 canvas=Image.new('RGBA',(923,278),BG);canvas.alpha_composite(out,(24,16))
 return canvas.convert('RGB').quantize(colors=128)
frames=[render(im)];dur=[180]
# Clip the emerging sun at the top of the stem; then reveal the rays.
for k in range(22):
 t=k/21;circle=sun.copy();pix=circle.load()
 for y in range(circle.height):
  for x in range(circle.width):
   r,g,b,a=pix[x,y]
   if y<26:pix[x,y]=(r,g,b,round(a*max(0,min(1,(t-.65)/.35))))
 shift=round(30*(1-min(1,t/.7))**2)
 frame=base.copy();frame.alpha_composite(circle,(840,shift))
 # The sun emerges from the i rather than overprinting the letter beneath it.
 if shift:
  cropped=frame.crop((840,66,930,100));original=base.crop((840,66,930,100));frame.paste(original,(840,66))
 frames.append(render(frame));dur.append(45)
frames.append(render(im));dur.append(3000)
# No loop extension: one sunrise, then a fully illuminated mark.
frames[0].save(R/'assets/aggie-am-sunrise.gif',save_all=True,append_images=frames[1:],duration=dur,disposal=2,optimize=True)
Image.new('RGBA',(1,1))
render(im).convert('RGB').save(R/'assets/aggie-am-static.png')
print('Created sunrise GIF', (R/'assets/aggie-am-sunrise.gif').stat().st_size)
