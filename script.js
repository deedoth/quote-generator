
let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person')

const quotes = [{
    quote: `"ahiethie hthtihtih sohierhie aioehrieohr ahdoshidfh aheihith is oru our service."`,
    person: ' Bristian Query'
}, {
    quote: `"eee jddd  jdjdjd dijidfjid jafjajaiis  isfjif book of faith that you love to read, Bible"`,
    person: " Akinpelu Bristian"
}, {
    quote: `"jddd  jdjdjd dijidfjid jafjajaiis  isfjif book of faith that you love to read, Bible"`,
    person: " Brian Bristian"
}, {
    quote: `"llp jddd  jdjdjd dijidfjid jafjajaiis  isfjif book of faith that you love to read, Bible"`,
    person: " Kristian Bappvjj"
}, {
    quote: `"jeei issij jddd  jdjdjd dijidfjid jafjajaiis  isfjif book of faith that you love to read, Bible"`,
    person: " Mariana Bristian"
}, {
    quote: `"siej ssj  jddd  jdjdjd dijidfjid jafjajaiis  isfjif book of faith that you love to read, Bible"`,
    person: " Kariam Bristian"
}, {
    quote: `"Mioku ku ku jdjdjd dijidfjid jafjajaiis  isfjif book of faith that you love to read, Bible"`,
    person: " AgbaAkin Bristian"
}, {
    quote: `"Minister of foreign jddd  jdjdjd dijidfjid jafjajaiis  isfjif book of faith that you love to read, Bible"`,
    person: " Min Gbobaloju Bristian"
}]

btn.addEventListener("click", () => {
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;

})