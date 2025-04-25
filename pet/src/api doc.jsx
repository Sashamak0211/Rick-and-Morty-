


async function fetchData() {
    try {
        const response = await fetch("https://rickandmortyapi.com/api/character");
        if(!response.ok) {
            throw new Error(`Ошибка HTTP: ${response.status}`);}
            const data = await response.json();
            console.log("Данные", data);
            return data;
            
    } catch (error) {
        console.error('Ошибка', error);
        
    }
}
export default fetchData;
