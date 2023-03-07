import { Headline } from '@/components/Headline';
import { Links } from '@/components/Links';
// import { Links } from '../Links';
import classes from '@/components/Main/Main.module.css';

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
