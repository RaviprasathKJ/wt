function count_c(input){
    map ={}
    for(let i = 0;i<input.length;i++){
         char = input.charAt(i);
         code = input.charCodeAt(i);
         if(map[code]){
            map[code].counts++;
         }
         else{
            map[code]={
                character:char,
                counts:1
            }
         }
    }
    return map;
}


map = count_c("hello");
for(const i in map){
    if(map.hasOwnProperty(code)){
        const {character,counts} = map[i];
        console.log(character,counts);
    }
}