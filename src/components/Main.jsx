import { Links } from '@/components/Links';
import { Headline } from '@/components/Headline';
import classes from './Main.module.css';

export function Main(props) {
    return (
        <main className={classes.main}>
            <Headline page={props.page}>
                <code>pages/{props.page}.js</code>
            </Headline>
            <Links />
        </main>
    )
}
