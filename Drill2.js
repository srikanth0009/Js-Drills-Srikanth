
//Problem1

export function problem1(users) {

    const values = [];

    for (let x in users) {

        const array = users[x].interests;

        for (let i = 0; i < array.length; i++) {

            if (array[i] == "Video Games") {

                values.push(x);
            }
        }
    }
    return values;
}

//Problem2

export function problem2(users) {

    const values = [];

    for (let x in users) {

        if (users[x].nationality == "Germany") {

            values.push(x);
        }
    }
    return values;
}

//Problem3

export function problem3(users) {

    const values = [];

    for (let x in users) {

        if (users[x].qualification == "Masters") {

            values.push(x);
        }
    }
    return values;
}

//Problem4

export function problem4(users) {

    const language=[];
    const goLang = [];
    const javascript = [];
    const python = [];

    for (let x in users) {

        if (users[x].desgination === "Senior Golang Developer" || users[x].desgination === "Intern - Golang" ) {

            goLang.push(x);
        }
        else if(users[x].desgination === "Intern - Javascript" || users[x].desgination === "Senior Javascript Developer"){
            javascript.push(x);
        }
        else {
            python.push(x);
        }
    }
    language.push(goLang);
    language.push(javascript);
    language.push(python);
     return language;
}

