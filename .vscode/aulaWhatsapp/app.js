const res=document.getElementById('res');
let mat = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];


const [,,a]=mat[1];
res.innerHTML=a;