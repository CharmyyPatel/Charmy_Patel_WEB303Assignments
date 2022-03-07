/*
    Assignment 05
*/

$(document).ready(function () {
    class ContentItem {
        id = 0;
        name = "Name-1";
        description = "Description";
       genre = "Type";
        constructor(id, name, description, genre) {
            this.id = id;
            this.name = name;
            this.description = description;
            this.genre = genre;
        }
        get id(){
            return this.id;
        }
        set id(value){
            this.id = value;
        }
        get name(){
            return this.name;
        }
        set name(value){
            this.name = value;
        }
        get description(){
            return this.description;
        }
        set description(value){
            this.description = value;
        }
        get genre(){
            return this.genre;
        }
        set genre(value){
            this.genre = value;
        }
        updateContentItem(name, description, genre){
            if(name != null && description != null && genre != null) {
                this.name = name;
                this.description = description;
                this.genre = genre;
            }
        }

        toString(){
            return `<div id ="content-${this.id}">
                    <h2>${this.name}</h2>
                    <p>${this.description}</p>
                    <div>${this.genre}</div>
                    </div>`;
        }
    }

    let novels = [
        [0, 'Game of Thrones', 'A Game of Thrones is the first novel in A Song of Ice and Fire, a series of fantasy novels by the American author George R. R. Martin. It was first published on August 1, 1996. The novel won the 1997 Locus Award and was nominated for both the 1997 Nebula Award and the 1997 World Fantasy Award.', 'Fantasy'],
        [1, 'The Hitchhiker’s Guide to the Galaxy', 'The Hitchhiker’s Guide to the Galaxy often referred to as HGG2 or HHGTTG is a series of science fiction novels by comic genius Douglas Adams. The series was first made as a comedy broadcast, which aired on the BBC before it was made into other formats such as a feature film, computer game, TV series, comic books, novels, and stage shows.', 'Science Fiction'],
        [2, 'The Handmaid’s Tale', 'The Handmaid’s Taleis a futuristic dystopian novel by Canadian author Margaret Atwood, published in 1985. It is set in a near-future New England, in a strongly patriarchal, totalitarian theonomic state, known as the Republic of Gilead, which has overthrown the United States government.', 'Dystopian'],
        [3, 'White Fang', 'White Fang is the story of a wolf dog that is rescued from its brutal owner and gradually becomes domesticated through the patience and kindness of its new owner, Weedon Scott.', 'Adventure'],
        [4, 'The Overdue Life of Amy Byler', 'Overworked and underappreciated, single mom Amy Byler needs a break. So when the guilt-ridden husband who abandoned her shows up and offers to take care of their kids for the summer, she accepts his offer and escapes rural Pennsylvania for New York City.', 'Romance'],
        [5, 'Serafina and the Black Cloak', 'This book follows the spooky adventures of twelve-year-old Serafina, Chief Rat Catcher of the Biltmore Estate, as she works with friend Braeden Vanderbilt to uncover the true identity of The Man in the Black Cloak who is responsible for the mysterious disappearance of several of the estate’s youngest guests.', 'Children’s Fiction'],
        [6, 'Murder on the the Orient Express', 'An American tycoon lies dead in his compartment, stabbed a dozen times, his door locked from the inside. Isolated and with a killer in their midst, detective Hercule Poirot must identify the murderer – in case he or she decides to strike again.', 'Detective & Mystery'],
        [7, 'The Shining', 'The Shining is set in Colorado in the 1970s. It centres on the Torrance family: husband Jack, wife Wendy, and their five-year-old son, Danny. At the beginning of the novel, Jack is hired as the caretaker of the remote Overlook Hotel for the winter offseason.', 'Horror'],
        [8, 'The Girl with the Dragon Tattoo', 'A spellbinding amalgam of murder mystery, family saga, love story, and financial intrigue. It’s about the disappearance forty years ago of Harriet Vanger, a young scion of one of the wealthiest families in Sweden . . . and about her octogenarian uncle, determined to know the truth about what he believes was her murder.', 'Thriller'],
        [9, 'Simon vs. the Homo Sapiens Agenda', 'The coming-of-age story focuses on its titular protagonist Simon Spier, a closeted, gay, high school-aged boy who is forced to come out after a blackmailer discovers Simon’s e-mails written to another closeted classmate with whom he has fallen in love.', 'LGBTQ+'],
        [10, 'The Help', 'In 1960s Mississippi, Southern society girl Skeeter (Emma Stone) returns from college with dreams of being a writer. She turns her small town on its ear by choosing to interview the Black women who have spent their lives taking care of prominent white families. Only Aibileen (Viola Davis), the housekeeper of Skeeter’s best friend, will talk at first. But as the pair continue the collaboration, more women decide to come forward, and as it turns out, they have quite a lot to say.', 'Historical Fiction'],
    ];

    novels.forEach(novels => {
        let addNovels = new ContentItem(novels[0], novels[1], novels[2], novels[3], novels[4], novels[5], novels[6], novels[7], novels[8], novels[9], novels[10]);
        $("#content-item-list").append(addNovels.toString());
        $("#content-item-list").css({"border": "solid", "padding": "10px", "background-color": "light-coral", "color": "red", "width": "2px"}) 
    });
});


