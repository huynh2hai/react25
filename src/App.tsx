import {PageWrapper} from "./components/PageWrapper";
import {Container} from "./components/Container";
import {Header} from "./components/Header";
import {Search} from "./components/Search";
import {Sortlist} from "./components/Sortlist";
import {PuppiesList} from "./components/PuppiesList.js";
import {NewPuppyForm} from "./components/NewPuppyForm";

import {puppies} from "./data/puppies.js";
import {useState} from "react";
import {Puppy} from "./types";
import {LikedContext} from "./context/liked-context";

export function App() {
    return (
        <PageWrapper>
            <Container>
                <Header />
                <Main />
            </Container>
        </PageWrapper>
    )
}

function Main() {
    const [liked, setLiked] = useState<Puppy["id"][]>([1, 3]);

    return (
        <main>
            <LikedContext value={{liked, setLiked}}>
                <div className="mt-24 grid gap-8 sm:grid-cols-2">
                    <Search />
                    <Sortlist puppies={puppies} />
                </div>
                <PuppiesList puppies={puppies} />
            </LikedContext>
            <NewPuppyForm />
        </main>

    );
}
