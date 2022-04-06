import {defineComponent,ref} from 'vue'
import { NLayoutSider, NMenu} from "naive-ui";
import {RouterLink, useRoute, useRouter} from "vue-router";
import classes from "./index.module.scss";
import {useStore} from "vuex";
import useSideBar from "@/hooks/SiderBar";

export default defineComponent({
    name: 'SideBar',
    setup(props, ctx) {
        const router = useRouter()
        const route = useRoute()
        const store = useStore()
        const {menuOptions,handleUpdateValue} = useSideBar()
        const collapsed = ref(false)

        return () => (
            <>
                <NLayoutSider
                    bordered
                    collapseMode={'width'}
                    collapsedWidth={64}
                    width={240}
                    collapsed={collapsed.value}
                    showTrigger
                    onCollapse={() => collapsed.value = true}
                    onExpand={() => collapsed.value = false}
                    style={{backgroundColor: '#E7F5EE', height: '100%'}}
                    class={classes.side}
                >

                    <div class={classes.avatar}>
                        <img onClick={()=>router.push('/dashboard')} src={store.state.user.avatar} class={classes.ImgAvatar}
                             style={{height: !collapsed.value ? '80px' : '40px'}}/>
                        {
                            !collapsed.value ? (<p onClick={()=>router.push('/dashboard')}>suemor</p>) : undefined
                        }

                    </div>
                    <NMenu options={menuOptions}
                           collapsed={collapsed.value}
                           collapsedWidth={64}
                           collapsedIconSize={22}
                           onUpdateValue={handleUpdateValue}
                           value={route.fullPath}
                    />
                </NLayoutSider>

            </>
        );
    }
})

