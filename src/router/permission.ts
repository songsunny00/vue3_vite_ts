/*
 * @Author: songsunny
 * @Date: 2022-02-20 13:58:09
 * @LastEditors: songsunny
 * @LastEditTime: 2022-02-20 14:00:48
 * @Description: 
 * @Github: https://github.com/songsunny00
 */
import router from './index'

router.beforeEach(
    (
        to: RouteLocationNormalized,
        from: RouteLocationNormalized,
        next: NavigationGuardNext
    ) => {
        // 获取userToken，根据业务场景可由localStorage也可由cookie中获取
        const user = localStorage.getItem("user");
        // 路由守卫判断
        if (to.meta.type === "login" && user) {
            next({ name: "home" });
            return;
        }

        if (to.meta.type === "home" && !user) {
            next({ name: "login" });
            return;
        }

        next();
    });
