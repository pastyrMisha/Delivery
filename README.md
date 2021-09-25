https://www.npmjs.com/package/json-server

Установить json-server глобально:
```javascript
npm i json-server -g
```
Запуск:
```javascript
json-server --watch db.json
```
Запуск на определенном порте:
```javascript
json-server --watch db.json --port 3004
```

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