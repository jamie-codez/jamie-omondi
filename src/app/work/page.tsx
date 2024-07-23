import React from 'react';

const Work = () => {
    return (
        <section>
            <div className={"container mx-auto"}>
                <h1 className={"h1 text-center mb-12"}>My Work</h1>
                <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"}>
                    {/* work item */}
                    <div className={"bg-primary rounded-lg p-8"}>
                        <h2 className={"h2 mb-4"}>Project 1</h2>
                        <p className={"text-white/80 mb-6"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, aspernatur atque autem beatae commodi consequuntur cumque debitis delectus doloremque doloribus ducimus eos eum eveniet excepturi explicabo fuga fugit harum illo impedit inventore iusto laborum laudantium magnam minima molestiae nemo nesciunt nihil nisi nobis non numquam obcaecati odio officia omnis pariatur perferendis placeat porro possimus quaerat quas quibusdam quisquam quo ratione recusandae reiciendis repellat repudiandae rerum saepe sapiente sequi similique sit soluta sunt suscipit tempora tenetur totam ullam unde ut vel veniam voluptate voluptates voluptatum.</p>
                        <a href={"#"} className={"text-accent hover:text-primary"}>View Project</a>
                    </div>
                    {/* work item */}
                    <div className={"bg-primary rounded-lg p-8"}>
                        <h2 className={"h2 mb-4"}>Project 2</h2>
                        <p className={"text-white/80 mb-6"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, aspernatur atque autem beatae commodi consequuntur cumque debitis delectus doloremque doloribus ducimus eos eum eveniet excepturi explicabo fuga fugit harum illo impedit inventore iusto laborum laudantium magnam minima molestiae nemo nesciunt nihil nisi nobis non numquam obcaecati odio officia omnis pariatur perferendis placeat porro possimus quaerat quas quibusdam quisquam quo ratione recusandae reiciendis repellat repudi...<a href={"#"} className={"text-accent hover:text-primary"}>View Project</a></p>
                    </div>
                    {/* work item */}
                    <div className={"bg-primary rounded-lg p-8"}>
                        <h2 className={"h2 mb-4"}>Project 3</h2>
                        <p className={"text-white/80 mb-6"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, aspernatur atque autem beatae commodi consequuntur cumque debitis delectus doloremque doloribus ducimus eos eum eveniet excepturi explicabo fuga fugit harum illo impedit inventore iusto laborum laudantium magnam minima molestiae nemo nesciunt nihil nisi nobis non numquam obcaecati odio officia omnis pariatur perferendis placeat porro possimus quaerat quas quibusdam quisquam quo ratione recusandae reiciendis repellat repudi...<a href={"#"} className={"text-accent hover:text-primary"}>View Project</a></p>
                    </div>
                {/*  work item  */}
                    <div className={"bg-primary rounded-lg p-8"}>
                        <h2 className={"h2 mb-4"}>Project 4</h2>
                        <p className={"text-white/80 mb-6"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, aspernatur atque autem beatae commodi consequuntur cumque debitis delectus doloremque doloribus ducimus eos eum eveniet excepturi explicabo fuga fugit harum illo impedit inventore iusto laborum laudantium magnam minima molestiae nemo nesciunt nihil nisi nobis non numquam obcaecati odio officia omnis pariatur perferendis placeat porro possimus quaerat quas quibusdam quisquam quo ratione recusandae reiciendis repellat repudi...<a href={"#"} className={"text-accent hover:text-primary"}>View Project</a></p>
                    </div>
                    {/* work item */}
                    <div className={"bg-primary rounded-lg p-8"}>
                        <h2 className={"h2 mb-4"}>Project 5</h2>
                        <p className={"text-white/80 mb-6"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, aspernatur atque autem beatae commodi consequuntur cumque debitis delectus doloremque doloribus ducimus eos eum eveniet excepturi explicabo fuga fugit harum illo impedit inventore iusto laborum laudantium magnam minima molestiae nemo nesciunt nihil nisi nobis non numquam obcaecati odio officia omnis pariatur perferendis placeat porro possimus quaerat quas quibusdam quisquam quo ratione recusandae reiciendis repellat repudi...<a href={"#"} className={"text-accent hover:text-primary"}>View Project</a></p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Work;