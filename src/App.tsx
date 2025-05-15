import {PageWrapper} from "./components/PageWrapper";
import {Container} from "./components/Container";
import {Header} from "./components/Header";
import {Search} from "./components/Search";
import {Sortlist} from "./components/Sortlist";
import {PuppiesList} from "./components/PuppiesList.js";
import {NewPuppyForm} from "./components/NewPuppyForm";

import {puppies} from "./data/puppies.js";

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
    return (
        <main>
            <div className="mt-24 grid gap-8 sm:grid-cols-2">
                <Search />
                <Sortlist />
            </div>
            <PuppiesList puppies={puppies} />
            <NewPuppyForm />
        </main>

    );
}
