import fetchData from "./api doc";
import { useState, useEffect } from "react";
import "./App.css";

function CharacterList() {
    // Состояние для данных, загрузок и ошибок
    const [characters, setCharacters] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0)
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Загружаем данные при монтировании компонента
    useEffect(() => {
        const loadData = async () => {
            try {
                const data = await fetchData(); // получаем данные
                if(!data || !Array.isArray(data.results)) {
                    throw new Error('Невалидные данные или поле результ не является массивом')
                }
                setCharacters(data.results); // вывод результата,сохраняем массив персонажей
            } catch (err) {
                setError(err.message); // сообщение об ошибке
            } finally {
                setLoading(false); // завершаем загрузку
            }
        }
        loadData();
    }, []); // Пустой массив зависимостей - эффект выполнится только один раз

    // Рендеринг
    // делаем кнопку назад и вперед 
    const prevCharacters = () => {
        setCurrentIndex((prevIndex) => prevIndex > 0 ? prevIndex - 1: prevIndex);
    
    };
    
    const nextCharacters = () => {
        setCurrentIndex((nextIndex) => nextIndex < characters.length - 1? nextIndex + 1 : nextIndex)
    };


    if(loading) {
        return <div>Загрузка...</div>
    }
    if(error) {
        return <div className="">Произошла Ошибка: {error}</div>
    }
    if(!characters || characters.length === 0) {
        return <div className=""> Нет данных о персонаже</div>

    }
    const currentCharacters = characters[currentIndex]
    // создаем список персонажей
    return (
        <div className="">
        <div style={{textAlign: 'center', padding: '20px'}}>
            <h1>Карточка персонажа</h1>
            <img src={currentCharacters.image} alt={currentCharacters.name}style={{width: '300px', borderRadius: '10px'}} />
            <h2>{currentCharacters.name}</h2>
            <p>Статус: {currentCharacters.status}</p>
            <p>Вид: {currentCharacters.species}</p>
        </div> 
        <div className="box-button">
        <div className="box-button-left" onClick={prevCharacters}><button className="arrow-button"><svg xmlns="http://www.w3.org/2000/svg" viewBox='0 0 24 24' strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg></button></div>
      
      <div className="button-right" onClick={nextCharacters}><button className="arrow-button"><svg xmlns="http://www.w3.org/2000/svg" viewBox='0 0 24 24' strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg></button></div>
        </div>
            </div>
        
    );
}

export default CharacterList;