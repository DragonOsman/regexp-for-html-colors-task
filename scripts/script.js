"use strict";

const str = "color:#121212; background-color:#AA00ef bad-colors:f#fddee #fd2 #12345678";

alert(str.match(/#[0-9A-F]{6}\b/gi));
