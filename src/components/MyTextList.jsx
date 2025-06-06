import styles from './MyTextList.module.css';
import { MyText } from './Mytext';  
export function MyTextList() {
    const texts = [
        { title: "React Component 1", text: "Olá mundo" },
        { title: "React Component 2", text: "Olá mundo" },
        { title: "React Component 3", text: "Olá mundo" },
        { title: "React Component 4", text: "Olá mundo" },
        { title: "React Component 5", text: "Olá mundo" },
    ];

    return (
        <div className={stytles.container}>
            {texts.map((text, index) => (
                <MyText key={index} title={`${text.title} ${index + 1}`}>
                    {text.text}
                </MyText>
            ))} 
        </div>
    );
}


//TESTE
/*export function MyTextList() {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>My Text List</h2>
            <ul className={styles.list}>
                <li className={styles.item}>Item 1</li>
                <li className={styles.item}>Item 2</li>
                <li className={styles.item}>Item 3</li>
                <li className={styles.item}>Item 4</li>
                <li className={styles.item}>Item 5</li>
            </ul>
        </div>
    );
}
    */