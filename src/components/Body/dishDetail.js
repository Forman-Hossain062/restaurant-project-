import React from 'react';
import LoadComments from './LoadComments';
import CommentForm from './commentform';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
const DishDetail = props => {
    return (
        <div>
            <Card style={{ marginTop: "10px" }}>
                <CardImg top src={props.dish.image} alt={props.dish.name} />
                <CardBody style={{ textAlign: "left" }}>
                    <CardTitle>{props.dish.name}</CardTitle>
                    <CardText>
                        <p>{props.dish.description}</p>
                        <p>{props.dish.price}/-</p>
                    </CardText>
                    <hr />
                    <LoadComments comments={props.comments} />
                    <hr />
                    <CommentForm dishId={props.dish.id} addComment={props.addComment} />

                </CardBody>

            </Card>

        </div>
    )
}
export default DishDetail;
