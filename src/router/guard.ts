import QProgress from 'qier-progress'
import { router } from './router'
import {checkLogined} from "@/api/modules/user";
import {IAxios} from "@/typings/axiosCode";
import {removeToken} from "@/utils/auth";
const qprogress = new QProgress()
router.beforeEach( async (to) => {
  qprogress.start()
  if (to.meta.isPublic) {

  } else {
    const {success} = await checkLogined() as IAxios
    if (!success){
      removeToken()
      return '/login'
    }
  }
})

router.afterEach((to, _) => {
  qprogress.finish()

})


router.onError(() => {
  return
})

function getPageTitle(pageTitle?: string | null) {

}
