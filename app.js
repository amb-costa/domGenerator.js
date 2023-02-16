//arrays with strings
let pronoun = ['the','our','their','ye'];
let adj= ['bored','sleepy','big','loud'];
let noun= ['gec','capybara','floppa'];
let domain=['.com','.org','.tv'];

//first counter 4 pronoun array
for (let i=0; i<pronoun.length;i++) {
    //second counter 4 adj array 
    for (let j=0;j<adj.length;j++) {
        //third counter 4 noun array
        for (let u=0;u<noun.length;u++) {
            //last counter 4 domain 
            for (let v=0;v<domain.length;v++) {
                //console w generated string domain
                console.log(`${pronoun[i]}${adj[j]}${noun[u]}${domain[v]}`);
            };
        };
    };    
};