import React, { Component } from 'react';
// import DISHES from '../../data/dishes';
// import COMMENTS from '../../data/comments';
import MenuItem from './MenuItem';
import { addComment, fetchDishes } from '../../redux/actionCreators';
import DishDetail from './dishDetail';
import { connect } from 'react-redux';
import { CardColumns, Modal, ModalBody, Button, ModalFooter } from 'reactstrap';
import Loading from './Loading';

const mapStateToProps = state => {

    return {
        dishes: state.dishes,
        comments: state.comments
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addComment: (dishID, rating, author, comment) => dispatch(addComment(dishID, rating, author, comment)),
        fetchDishes: () => dispatch(fetchDishes())
    }
}
class Menu extends Component {
    state = {

        selectedDish: null,
        modalOpen: false

    }

    onDishSelect = dish => {
        // console.log(dish);
        this.setState({
            selectedDish: dish,
            modalOpen: !this.state.modalOpen
        })
    }
    toglleModal = () => {
        this.setState({
            modalOpen: !this.state.modalOpen
        })
    }
    componentDidMount() {
        this.props.fetchDishes();
    }
    render() {
        if (this.props.dishes.isLoading) {
            return (<Loading />)

        }
        else {
            document.title = "Menu";
            const menu = this.props.dishes.dishes.map(item => {
                return (

                    <MenuItem
                        dish={item}
                        key={item.id}
                        DishSelect={() => this.onDishSelect(item)} />

                )
            })

            let dishDetail = null;
            if (this.state.selectedDish != null) {
                const comments = this.props.comments.filter(comment => comment.dishId === this.state.selectedDish.id);
                // console.log(comments);
                dishDetail = <DishDetail
                    dish={this.state.selectedDish}
                    comments={comments}
                    addComment={this.props.addComment} />
            }

            return (
                <div className="container">
                    <div className="row">
                        <CardColumns>
                            {menu}
                        </CardColumns>
                        <Modal isOpen={this.state.modalOpen} >
                            <ModalBody>
                                {dishDetail}
                            </ModalBody>
                            <ModalFooter>
                                <Button color="secondary " onClick={this.toglleModal}>
                                    Close
                                </Button>
                            </ModalFooter>
                        </Modal>

                    </div>
                </div>
            );
        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Menu);