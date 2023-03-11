const hayOperaciones = (string)=>{
    if(string.at(-1)==="+"||string.at(-1)==="-"||string.at(-1)==="/"||string.at(-1)==="*"){
      return true;
    } else{return false}
  };

export default hayOperaciones