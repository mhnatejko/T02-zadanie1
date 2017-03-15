if (typeof String.prototype.repeat === "function"){
    String.prototype.repeatt = function (number) {
        var newWord = "";
        for (var i = 0; i < number; i ++){
            newWord += this;
        } 
        return newWord
    };
}else{
    String.prototype.repeat = function (number) {
        var newWord = "";
        for (var i = 0; i < number; i ++){
            newWord += this;
        } 
        return newWord;
        
    };
};

