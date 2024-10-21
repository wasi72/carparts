import React from 'react';
import '../../assets/styles/AboutUs/TeamSection.css';
import Img1 from '../../assets/imgs/team-2.avif';
import Img2 from '../../assets/imgs/team-3.avif';
import Img3 from '../../assets/imgs/team-4.avif';
import Img4 from '../../assets/imgs/team-5.avif';
import Img5 from '../../assets/imgs/team-6.avif';
import Img6 from '../../assets/imgs/team-7.avif';
import Img7 from '../../assets/imgs/team-8.avif';
import Img8 from '../../assets/imgs/team-9.avif';

const TeamSection = () => {
    const teamMembers = [
        {
            name: 'Sarah Wilson',
            description: 'Sarah’s knowledge of vehicle compatibility is unmatched. She loves helping customers find the perfect fit for their project.',
            role: 'Parts Specialist',
            image: Img1,
        },
        {
            name: 'Ben Jackson',
            description: 'Ben’s knowledge of classic cars is unmatched. He’s passionate about keeping vintage vehicles on the road and is our expert on sourcing hard-to-find parts.',
            role: 'Vintage Parts Specialist',
            image: Img2,
        },
        {
            name: 'David Thomas',
            description: 'With over 20 years of experience under the hood, David brings his expertise to the team, ensuring we carry the right parts for every job.',
            role: 'Head Mechanic',
            image: Img3,
        },
        {
            name: 'Michael Mathews',
            description: 'Michael’s creativity keeps our website informative and user-friendly, ensuring a smooth shopping experience.',
            role: 'Marketing & Web Design',
            image: Img4,
        },
        {
            name: 'Chloe Grey',
            description: 'Chloe’s passion for cars and knack for clear explanations shine through in our educational resources and tutorials.',
            role: 'Content Creator',
            image: Img5,
        },
        {
            name: 'Omar Rodriguez',
            description: 'Omar keeps our shelves stocked and organized, making sure the parts you need are always available.',
            role: 'Inventory Management',
            image: Img6,
        },
        {
            name: 'Benjamin Moore',
            description: 'Benjamin’s dedication to building relationships allows him to understand customer needs and recommend the best solutions.',
            role: 'Sales Manager',
            image: Img7,
        },
        {
            name: 'Sophia Garcia',
            description: 'Sophia’s friendly and helpful demeanor ensures a smooth and positive experience for every customer.',
            role: 'Customer Service',
            image: Img8,
        },
    ];

    return (
        <section className="team-section">
            <h2>Our Perfect Team</h2>
            <div className="team-grid">
                {teamMembers.map((member, index) => (
                    <div className="team-card" key={index}>
                        <img src={member.image} alt={member.name} />
                        <div className="team-card-content">
                            <h3>{member.name}</h3>
                            <p>{member.description}</p>
                            <span>{member.role}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TeamSection;
