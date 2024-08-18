import {Head} from '@inertiajs/react';
import Footer from '../Layouts/Footer.jsx';
import Navbar from '../Layouts/Navbar.jsx';

export default function Welcome({auth}) {
    return (<>
        <Head title="Welcome"/>
        <div className="flex flex-col min-h-screen bg-amber-100">
            <Navbar auth={auth}/>
            <main className="flex justify-center items-center text-black flex-1 flex-row">
                <div className='text-3xl'>
                The Lord of the Rings is an epic[1] high fantasy novel[a] by the English author and scholar J. R. R. Tolkien. Set in Middle-earth, the story began as a sequel to Tolkien's 1937 children's book The Hobbit, but eventually developed into a much larger work. Written in stages between 1937 and 1949, The Lord of the Rings is one of the best-selling books ever written, with over 150 million copies sold.[2]

The title refers to the story's main antagonist,[b] Sauron, the Dark Lord who in an earlier age created the One Ring to rule the other Rings of Power given to Men, Dwarves, and Elves, in his campaign to conquer all of Middle-earth. From homely beginnings in the Shire, a hobbit land reminiscent of the English countryside, the story ranges across Middle-earth, following the quest to destroy the One Ring, seen mainly through the eyes of the hobbits Frodo, Sam, Merry, and Pippin. Aiding Frodo are the Wizard Gandalf, the Men Aragorn and Boromir, the Elf Legolas, and the Dwarf Gimli, who unite in order to rally the Free Peoples of Middle-earth against Sauron's armies and give Frodo a chance to destroy the One Ring in the fire of Mount Doom.

Although often mistakenly called a trilogy, the work was intended by Tolkien to be one volume in a two-volume set along with The Silmarillion.[3][T 3] For economic reasons, The Lord of the Rings was first published over the course of a year from 29 July 1954 to 20 October 1955 in three volumes rather than one[3][4] under the titles The Fellowship of the Ring, The Two Towers, and The Return of the King; The Silmarillion appeared only after the author's death. The work is divided internally into six books, two per volume, with several appendices of background material.[c] These three volumes were later published as a boxed set, and even finally as a single volume, following the author's original intent.

Tolkien's work, after an initially mixed reception by the literary establishment, has been the subject of extensive analysis of its themes, literary devices, and origins. Influences on this earlier work, and on the story of The Lord of the Rings, include philology, mythology, Christianity, earlier fantasy works, and his own experiences in the First World War.

The Lord of the Rings is considered one of the greatest fantasy books ever written, and it has helped to create and shape the modern fantasy genre. Since release, it has been reprinted many times and translated into at least 38 languages.[d] Its enduring popularity has led to numerous references in popular culture, the founding of many societies by fans of Tolkien's works,[5] and the publication of many books about Tolkien and his works. It has inspired many derivative works, including paintings, music, films, television, video games, and board games.

Award-winning adaptations of The Lord of the Rings have been made for radio, theatre, and film. It was named Britain's best-loved novel of all time in a 2003 poll by the BBC called The Big Read.
            
                </div>
                <div className='text-3xl'>
                The Lord of the Rings is an epic[1] high fantasy novel[a] by the English author and scholar J. R. R. Tolkien. Set in Middle-earth, the story began as a sequel to Tolkien's 1937 children's book The Hobbit, but eventually developed into a much larger work. Written in stages between 1937 and 1949, The Lord of the Rings is one of the best-selling books ever written, with over 150 million copies sold.[2]

The title refers to the story's main antagonist,[b] Sauron, the Dark Lord who in an earlier age created the One Ring to rule the other Rings of Power given to Men, Dwarves, and Elves, in his campaign to conquer all of Middle-earth. From homely beginnings in the Shire, a hobbit land reminiscent of the English countryside, the story ranges across Middle-earth, following the quest to destroy the One Ring, seen mainly through the eyes of the hobbits Frodo, Sam, Merry, and Pippin. Aiding Frodo are the Wizard Gandalf, the Men Aragorn and Boromir, the Elf Legolas, and the Dwarf Gimli, who unite in order to rally the Free Peoples of Middle-earth against Sauron's armies and give Frodo a chance to destroy the One Ring in the fire of Mount Doom.

Although often mistakenly called a trilogy, the work was intended by Tolkien to be one volume in a two-volume set along with The Silmarillion.[3][T 3] For economic reasons, The Lord of the Rings was first published over the course of a year from 29 July 1954 to 20 October 1955 in three volumes rather than one[3][4] under the titles The Fellowship of the Ring, The Two Towers, and The Return of the King; The Silmarillion appeared only after the author's death. The work is divided internally into six books, two per volume, with several appendices of background material.[c] These three volumes were later published as a boxed set, and even finally as a single volume, following the author's original intent.

Tolkien's work, after an initially mixed reception by the literary establishment, has been the subject of extensive analysis of its themes, literary devices, and origins. Influences on this earlier work, and on the story of The Lord of the Rings, include philology, mythology, Christianity, earlier fantasy works, and his own experiences in the First World War.

The Lord of the Rings is considered one of the greatest fantasy books ever written, and it has helped to create and shape the modern fantasy genre. Since release, it has been reprinted many times and translated into at least 38 languages.[d] Its enduring popularity has led to numerous references in popular culture, the founding of many societies by fans of Tolkien's works,[5] and the publication of many books about Tolkien and his works. It has inspired many derivative works, including paintings, music, films, television, video games, and board games.

Award-winning adaptations of The Lord of the Rings have been made for radio, theatre, and film. It was named Britain's best-loved novel of all time in a 2003 poll by the BBC called The Big Read.
            
                </div>
            </main>
            <Footer/>
        </div>
    </>);
};

