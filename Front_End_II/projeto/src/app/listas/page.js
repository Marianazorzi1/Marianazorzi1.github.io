export default function Listas() {
    const racas = ['Vira-lata', 'Pit-bull', 'Pug', 'Golden', 'Labrador', 'Shitzu', 'Pastor-alemão', 'Bull-dog', 'Bull-dog-alemão', 'Bull-dog-francês']

    const racasObj = [
        {
            id: 0,
            raca: 'Vira-lata'
        },
        {
            id: 1,
            raca: 'Pit-bull'
        },
        {
            id: 2,
            raca: 'Pug'
        },
        {
            id: 3,
            raca: 'Golden'
        },
        {
            id: 4,
            raca: 'Labrador'
        },
        {
            id: 5,
            raca: 'Shitzu'
        },
        {
            id: 6,
            raca: 'Pastor-alemão'
        },
        {
            id: 7,
            raca: 'Bull-dog'
        },
        {
            id: 8,
            raca: 'Bull-dog-alemão'
        },
        {
            id: 9,
            raca: 'Bull-dog-francês'
        }

    ]

    return (

        <div>
            <h1>Listas</h1>
            <ul>
                <h2>Lista comum</h2>

                {racas.map((raca, i) => (
                    <li key={i}>  {i + 1} - {raca}</li>
                ))}

                <h2>Lista de Objetos</h2>
                {racasObj.map((r) => (
                    <li key={r.id}> {r.id + 1} - {r.raca}</li>

                ))}

                


            </ul>
        </div>
    )
}