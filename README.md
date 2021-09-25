```javascript
const soldair = {
   itemx: [
            {
                id: 1,
                name: "Alex",
                rang: "colonel",
                qtt: 1
            },  
            {
                id: 2,
                name: "Olga",
                rang: "recrut",
                qtt: 1
            }
           ]
}

const findy = soldair.itemx.find(item => item.id === 2)

let newItemx = {
    ...findy,
    qtt: ++findy.qtt
}

console.log(newItemx);
```
