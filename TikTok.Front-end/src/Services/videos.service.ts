import axios from "axios";
import { CreateVideoModel, VideoModel } from "../Models/videoModel";

const linkapi = "tiktok.somee.com/api/Videos"

const api = axios.create({baseURL: linkapi})

export const videosService = {
    get: function()
    {
        return api.get<VideoModel[]>('all');
    },

    getById: function (id: Number) {
        return api.get<VideoModel>(`${id}`);
    },

    create: function(model: CreateVideoModel){
        const formData = new FormData();
        
        for (const key in model) {
            if(model[key as keyof CreateVideoModel] == null) continue;

            const value = model[key as keyof CreateVideoModel] as string | Blob;
            formData.append(key, value);
        }

        return api.post("", formData);
    },

    delete: function(id: Number)
    {
        return api.delete(`${id}`);
    }
}