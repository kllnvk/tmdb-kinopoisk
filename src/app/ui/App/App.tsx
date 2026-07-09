import {selectThemeMode} from "@/app/model/app-slice";
import {Routing} from "@/app/routing/Routing";
import {ThemeProvider} from "@/app/ui/ThemeProvider/ThemeProvider";
import {Footer, Header} from "@/common/components";
import {useSelector} from "react-redux";
import {ToastContainer} from "react-toastify";
import s from "./App.module.css"

function App() {
    const themeMode = useSelector(selectThemeMode)

    return (
        <ThemeProvider themeMode={themeMode}>
            <div className={s.app}>
                <Header/>
                <main className={s.main}>
                    <div className={s.wrapper}>
                    <Routing/>
                    </div>
                </main>
                <ToastContainer />
                <Footer/>
            </div>
        </ThemeProvider>
    )
}

export default App
