import Nav from "./Nav";

export default function Header(){
    return(
        <header>
            <div className="container">
                <h1>Live Hockey Scores!</h1>
            <p>Get the latest scores and stats of your favorite hockey teams.</p>
                <Nav />
            </div>
        </header>
    )
}