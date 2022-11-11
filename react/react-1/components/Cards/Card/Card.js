

export default function Card({ title, para }) {

    return (
        <div class="card">
            <img src="https://picsum.photos/300/200" class="card-img-top" alt="..."></img>
            <div class="card-body">
                <h5 class="card-title"> {title} </h5>
                <p class="card-text">{para} </p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
        </div>
    )
}