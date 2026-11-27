let Tessera;
async function loadRuntime(){ if(Tessera)return; const response=await fetch("https://huggingface.co/cfahlgren1/tessera-small-onnx/resolve/aff5ff7803c772dda5cd9886e503f7b98442822f/web/tessera.js"); if(!response.ok)throw Error("Runtime download HTTP "+response.status); const source=await response.text(); const url=URL.createObjectURL(new Blob([source],{type:"text/javascript"})); try{({Tessera}=await import(url));}finally{URL.revokeObjectURL(url);} }
let model,activeDevice;
self.onmessage=async({data:{id,prompt,device}})=>{
const progress=(text,percent)=>self.postMessage({kind:"progress",text,percent});
try{
if(!model||activeDevice!==device){
progress("Loading Tessera pixel-art model...",0);
await loadRuntime();
model=await Tessera.load({modelUrl:"https://huggingface.co/cfahlgren1/tessera-small-onnx/resolve/main/",device,onProgress:({stage,loaded,total})=>progress(stage==="download"?"Downloading AI model: "+Math.round((loaded||0)/1048576)+" MB":stage==="check"?"Checking graphics compatibility...":"Preparing AI model...",total?Math.min(100,100*loaded/total):0)});
activeDevice=device;
}
const sprites=await model.generate(prompt,{count:1,onStep:(step)=>progress("Painting pixel art — step "+step+" / 16",step/16*100)});
self.postMessage({kind:"result",id,sprites:sprites.map(s=>Array.from(s.rgba))});
}catch(e){self.postMessage({kind:"error",id,text:e.message||String(e)})}
};