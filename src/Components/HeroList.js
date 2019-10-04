import React from 'react'
import { connect } from 'react-redux'


class HeroList extends React.Component {

    state = {
        changedName: ''
    }
    changeHealth = () => {

        this.props.dispatch({
            type: 'CHANGE_HEALTH'

            //send only action no payload needed
            //type:action
        })
    }
    handleClick = () => {
        this.props.dispatch({
            type: 'PICKUP_WEAPON',
            payload: { type: 'stun grenade', damage: 5 }
        })

    }
    handleSubmit = (event) => {
        event.preventDefault() // no refresh pls
        console.log('submitting form')
        const action = {
            type: 'CHANGE_NAME',
            payload: this.state.changedName
        }

        this.props.dispatch(action)
        this.setState({ changedName: '' })
    }

    handleChange = (event) => {
        console.log(event.target.value)
        this.setState({ changedName: event.target.value })
    }

    render() {
        //const { name, health , weapon } = this.props.batman  we can do this too and we can also have h1 {name} and blabla
        return (
            <div>
                {/* {console.log("props of hero",this.props)} */}
                <h1>{this.props.hero.name}</h1>
                <p>{this.props.hero.weapon.type}</p>
                <h2>{this.props.hero.health}</h2>
                {/* <p>{this.props.hero.inventory.type}</p> */}
                <p>{this.props.hero.inventory.map(item => {
                    return <div>
                        <p>TYPE: {item.type}</p>
                        <p>DAMAGE: {item.damage}</p>
                    </div>
                })}


                </p>
                <button onClick={this.changeHealth}>Rest</button>
                {/* <button onClick={this.handleClick}>Stun Grenade</button> */}
                {/* I can make above call to function defintion by making into arrow function */}
                <button onClick={() => this.handleClick('lollipop', 1)}>Stun Grenade</button>
                <button onClick={() => this.handleClick(('tuba', 99))}>Stun Grenade</button>
                <form onSubmit={this.handleSubmit}>
                    <label>Change name</label>
                    <input value={this.state.changedName} onChange={this.handleChange} />
                    <input type="submit" />
                </form>
            </div>
        )
    }

}


const mapStateToProps = (state) => {
    return {
        hero: state
    }
}
export default connect(mapStateToProps)(HeroList)