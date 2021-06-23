import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/TagsRepositories";


class CreateTagService {

    async execute(name: string) {
        const tagRepositories = getCustomRepository(TagsRepositories);

        if (!name){
            throw new Error("Invalid tag!");
        }
       
        const tagAlreadyExists = await tagRepositories.findOne({
            name,
        })

        if (tagAlreadyExists){
            throw new Error("Tag already in use");
        }

        const tag = tagRepositories.create({
            name
        });

        await tagRepositories.save(tag);
        
        return tag;
    }
}

export { CreateTagService };