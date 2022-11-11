import Card from "./Card/Card"

export default function Cards() {

    return (
        <div class="row my-5">
            <div class="col">
                <div class="card-group">

                    <Card title='Title 1' para='this is paragraph 1' />
                    <Card title='Title 2' para='this is paragraph 2' />
                    <Card title='Title 3' para='this is paragraph 3' />


                </div>
            </div>
        </div>
    )
}