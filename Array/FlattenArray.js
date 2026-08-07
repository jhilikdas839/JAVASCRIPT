let arr = [1, [2, [3, 4]], 5]
let result = [];

arr.forEach((e) => {
    if (Array.isArray(e)) {
        e.forEach((elem) => {

            if (Array.isArray(elem)) {
                elem.forEach((elems) => {
                    if (Array.isArray(elems)) {


                    }
                    else {
                        result.push(elems)
                    }
                })
            }
            else {
                result.push(elem)
            }
        })
    }
    else {
        result.push(e)
    }

});

console.log(result);
