import React, { MouseEventHandler } from 'react';
import { connect } from 'react-redux';
import { resetSnakeLadder, startSnakeLadder } from '../../redux/actions/snake-ladder.action';

interface Props {
    reset?: MouseEventHandler;
    startGame?: MouseEventHandler;
}

const Header = (props: Props) => <div className="d-flex w-100 justify-content-between p-4">
    <button className="btn btn-outline-secondary px-5" onClick={props.reset}>
        Reset
    </button>
    <h1 className="m-0">
        Snake & Ladder
    </h1>
    <button className="btn btn-outline-secondary px-5" onClick={props.startGame}>
        Start
    </button>
</div>;

const mapDispatchToProps = (dispatch: any) => {
    return {
        reset: () => dispatch(resetSnakeLadder()),
        startGame: () => dispatch(startSnakeLadder())
    }
}

export default connect(null, mapDispatchToProps)(Header);