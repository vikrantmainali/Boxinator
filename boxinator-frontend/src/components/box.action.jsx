export const GET_BOXES = 'GET_BOXES';
export const POST_BOX = "POST_BOX";

const getBoxesSuccess = (boxes) => 
{
    return {
        type: GET_BOXES,
        boxes: boxes,
    }
}

export const getBoxes = () => 
{
    return (dispatch) => 
    {
        return fetch('http://localhost:3000/listboxes')
            .then(response => response.json())
            .then(boxes => dispatch(getBoxesSuccess(boxes)))
    }
}

const postBoxSuccess = (box) => 
{
    return {
        type: POST_BOX,
        box: box,
    }
};

export const postBox = (box) => 
{
    return (dispatch) => 
    {
        const options = 
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(box),
        }
        return fetch('http://localhost:3000/addbox', options)
            .then(response => response.json())
            .then(box => dispatch(postBoxSuccess(box)))
    }
}