import equilibriumImage from './images/image-equilibrium.jpg';
import avatarImage from './images/image-avatar.png';
import viewIcon from './images/icon-view.svg'
import etheriumIcon from './images/icon-ethereum.svg';
import clockIcon from './images/icon-clock.svg';

export function App(){
    return (
        <div className="componentDiv">
            <img src={equilibriumImage} className='mainImage'/>
            <img className='viewIcon' src={viewIcon}/>
            <h1>Equilibrium #3429</h1>
            <p style={{width:302,fontSize:18,fontWeight:'300',color:'#8BACD9'}}>Our Equilibrium collection promotes balance and calm.</p>
            <div style={{width:302, display:'flex',justifyContent:'space-between'}}>
                <span style={{fontSize:16,fontWeight:600,color:'#00FFF8'}}>
                    <img src={etheriumIcon}/> 
                    0.041 ETH
                </span>
                <span style={{fontSize:16,fontWeight:400,color:'#8BACD9'}}>
                    <img src={clockIcon}/> 
                    3 days left
                </span>
            </div>
            <span style={{width:302,border:'.5px solid #2E405A',marginTop:24,marginBottom:16}}></span>
            <div style={{ width:302, display:'flex',alignItems:'center'}}>
                <img src={avatarImage} style={{width:33,height:33,border:'1px solid #FFFFFF',marginRight:18,borderRadius:32}}/>
                <p style={{fontSize:16,fontWeight:400,color:"#8BACD9"}}>Creation of
                <h2> Jules Wyvern</h2></p>
            </div>
        </div>
    )
}