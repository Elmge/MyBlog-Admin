import {defineComponent, ref} from 'vue'
import {ContentLayout} from "@/layouts/content";
import {userInfo} from "@/api/modules/user";
import {NButton} from "naive-ui";
import {removeToken} from "@/utils/auth";
import {useRouter} from "vue-router";

export default defineComponent({
    name: 'Dashboard',
     setup(props, ctx) {
        const router = useRouter()


        return () => (
            <>
                <ContentLayout>
                    <NButton onClick={()=>{removeToken(),router.push('/login')}}>dashboard exit login</NButton>
                </ContentLayout>
            </>
        );
    }
})
