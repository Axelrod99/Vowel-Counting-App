function vowels() {
    let vowel = ['a','e','i','o','u']
    counter = 0
    let words = document.getElementById('input').value
    for (w of words) {

        for(v of vowel){
            if (v == w){
                counter++
            }
        }
    }
    document.getElementById('h33').innerHTML = `you have ${counter} vowels in your word`

    console.log(counter)
}