

// ------------Multiplicative Encryption---------------


const encryptBtn = document.querySelector('#changeM');
encryptBtn.addEventListener('click', function () {
    const Text = document.querySelector('#plainTextM');
    // console.log(plainText.value);
    const key = Number(document.querySelector('#keyM').value);
    // console.log(key);
    const cText = document.querySelector('#cipherTextM');
    let plainText = Text.value;
    plainText = plainText.toLowerCase();
    console.log(plainText);
    

    let alph = ['a', 'b', 'c', 'd', "e", 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    const cipher = plainText.split('');
    let cipherIndex = [];
    for (const alph2 of cipher) {
        // console.log(alph1,i);
        for (const [i, alph1] of alph.entries()) {
            if (alph2 == alph1) {
                // console.log(alph1, i);
                let letter = alph1;
                let indexLetter = i;
                const n = (indexLetter * key);
                if (n < 26) {
                    let c = n;
                    // console.log(c);
                    cipherIndex.push(c);
                } else {
                    c = n % 26;
                    // console.log(c);
                    cipherIndex.push(c);
                };
            };
        };
    };


    // console.log(cipherIndex);
    const cipherText = [];
    for (const n of cipherIndex) {
        for (const [i, alph1] of alph.entries()) {
            if (n == i) {
                // console.log(alph1, i);
                cipherText.push(alph1);
            }
        }
    };
    // console.log(cipherText);
    const Result = cipherText.join('');
    // console.log(Result);
    cText.innerHTML = Result;
    //end of function
});


// ------------Multiplicative Decryption---------------


const decryptBtn = document.querySelector('#changeMD');
decryptBtn.addEventListener('click', function () {
        const Text = document.querySelector('#plainTextMD');
            // console.log(plainText.value);
        const key = Number(document.querySelector('#keyMD').value);
            // console.log(key);
        const cText = document.querySelector('#cipherTextMD');
        let plainText = Text.value;
        plainText = plainText.toLowerCase();
            
        let alph = ['a', 'b', 'c', 'd', "e", 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

            const cipher = plainText.split('');
            let cipherIndex = [];
            for (const alph2 of cipher) {
                // console.log(alph1,i);
                for (const [i, alph1] of alph.entries()) {
                    if (alph2 == alph1) {
                        // console.log(alph1, i);
                        let letter = alph1;
                        let indexLetter = i;
                        // ------key-Inverse------
                        let KInv;
                        for (let x = 2; x < 1000; x++) {
                            if ((x * key) % 26 == 1) {
                                KInv = x;
                                // console.log(`InverseKey:${x}`);
                                break;

                                } 
                                // else {
                                //     // console.log(`No-InverseKey}`);

                                // };
                            }
                            // ------key-Inverse------
                            const n = (indexLetter * KInv);
                            if (n < 26) {
                                let c = n;
                                // console.log(c);
                                cipherIndex.push(c);
                            } else {
                                c = n % 26;
                                // console.log(c);
                                cipherIndex.push(c);
                            };
                        };
                    };
                };


                // console.log(cipherIndex);
                const cipherText = [];
                for (const n of cipherIndex) {
                    for (const [i, alph1] of alph.entries()) {
                        if (n == i) {
                            // console.log(alph1, i);
                            cipherText.push(alph1);
                        }
                    }
                };
                // console.log(cipherText);
                const Result = cipherText.join('');
                // console.log(Result);
                cText.innerHTML = Result;
                //end of function
            });