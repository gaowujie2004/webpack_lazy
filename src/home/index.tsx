import './index.css'

const Home = () => {
    return <div className='home'>
        <h2>Home页面</h2>
        <div>Home.tsx test</div>

        <button onClick={() => {
            //
            import("./utils").then(async res => {
                res.syncSleep(2000);
                console.log("ok")
            })
        }}>动态加载uitls</button>


        <button onClick={async ()=>{
            let res  = await import(/* webpackChunkName: "Profile" */'../profile');
            console.log("profile 页面加载完毕", res);

        }}>
            动态加载/profile页面
        </button>
    </div>
}

export default Home