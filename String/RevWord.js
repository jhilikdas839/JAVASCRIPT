const Rev = (str) => {
    console.log("Previous--->", str);

    const word = str.split(" ").reverse().join(" ");
    console.log("Recent--->", word);

}

Rev("I love JS")