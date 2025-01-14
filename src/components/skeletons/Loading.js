import { ShimmerText, ShimmerTitle } from "react-shimmer-effects";

export default function Loading() {
    const fakeAnimals = [
        { id: 1, url: "fake", name: "fake", description: "fake" },
        { id: 2, url: "fake", name: "fake", description: "fake" },
        { id: 3, url: "fake", name: "fake", description: "fake" },
        { id: 4, url: "fake", name: "fake", description: "fake" },
    ]
    return <div className="results">
        <ul>
            {
                fakeAnimals.map((animal) => (
                    <li key={animal.id}
                        className="result">
                        <ShimmerText width={100} line={1} />
                        <ShimmerTitle line={1} />
                        <ShimmerText width={100} line={1} />
                    </li>
                ))
            }
        </ul>
    </div>;
}