import "./footer.css"
export default function Footer() {
    return (
        <footer className='footer'>
            <div className='footer__title footer__item'>Social network</div>
            <a style={{color: "red"}} className="footer__item" href="https://youtube.com">YouTube</a>
            <img className="footer__item" src="https://img.icons8.com/?size=48&id=19318&format=png" alt="Youtube"/>
            <p>YouTube — видеохостинг, предоставляющий пользователям услуги хранения, доставки и показа видео</p>
            <a style={{color: "pink"}} className="footer__item" href="https://www.instagram.com/">Instagram</a>
            <img className="footer__item" src="https://img.icons8.com/?size=48&id=32323&format=png" alt="Instagram"/>
            <p>Instagram — американская социальная сеть для обмена фотографиями и видео, основанная Кевином Систромом и Майком Кригером</p>
            <a style={{color: "blue"}} href="https://web.telegram.org/k/">Telegram</a>
            <img className="footer__item" src="https://img.icons8.com/?size=48&id=63306&format=png" alt="Telegram"/>
            <p>Telegram — кроссплатформенная система мгновенного обмена сообщениями с функциями обмена текстовыми, голосовыми и видеосообщениями, а также стикерами, фотографиями и файлами многих форматов.</p>
        </footer>
    )
}