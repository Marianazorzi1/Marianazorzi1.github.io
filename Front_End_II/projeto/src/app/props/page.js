import Card from '@/components/Card';

    const dogs = [
        {
            id: 1,
            nome:'Perigo',
            raca: 'Vira-Lata',
            peso: 1.5,
            cor: 'branca'
        },
        {
            id: 2,
            nome:'Mel',
            raca: 'Pug',
            peso: 15,
            cor: 'preta'
        },
        {
            id: 1,
            nome:'Perigosa',
            raca: 'pinsher ',
            peso: 20,
            cor: 'marron'
        }
    ]

export default function Props(){
    return(
        <div>
            <h1>Props</h1>
            <div>
                {dogs.map((dog) => (
                    <Card 
                    key={dog.id} 
                    nome = {dog.nome} 
                    raca = {dog.raca} 
                    peso = {dog.peso}
                    cor={dog.cor}/>
                ))}
            </div>
        </div>
        


    )
}