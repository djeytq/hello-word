// class pessoa{
//     constructor(nome,idade){
//         this.nome=nome;
//         this.idade=idade
//     }
//     show(){
//         return this.nome+' '+this.idade;
//     }
// }

// class escola extends pessoa{
//     constructor(nome,idade,phone,job){

//     super(nome,idade);    
//     this.phone=phone;
//     this.job=job;
//     }
//     sho(){
//         return this.nome+' '+this.idade;
//     }
// }

// const p1=new pessoa('djey',20);
// const esc=new escola('a',21,'123','banker')

// var res=document.getElementById('res');
// res.innerHTML=esc.sho();

const res=document.getElementById('res');

const obj={
    name:'djey',
    idade:['vinte',20],
    func:function show(){alert(`Meu nome é ${obj.name} e temho ${obj.idade[0]} de idade`)}
}
const texto=JSON.stringify(obj);
res.innerHTML=texto;
const verse=JSON.parse(texto);
res.innerHTML+=`<hr>`+verse.name;



// const text=`{
//     "marca":"carro",
//     "arroz":["feijao",20]
// }
// `
// const ob=JSON.parse(text);
// res.innerHTML+=`<hr>`+ob;