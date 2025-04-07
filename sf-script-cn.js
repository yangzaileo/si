// 用于处理映像的下载链接和复制功能
function copyText(version) {
    const magnetLinks = {
        ws2025: "magnet:?xt=urn:btih:376b9a7cf1e77823563491794c697640a27612d3&dn=zh-cn_windows_server_2025_updated_march_2025_x64_dvd_e24d2ee5.iso&xl=8022067200",
        ws2022: "magnet:?xt=urn:btih:0A63B2E08D5D154A79D408040BE4994917C223D3&dn=zh-cn_windows_server_2022_x64_dvd_6c73507d.iso",
        ws2019: "ed2k://|file|cn_windows_server_2019_essentials_x64_dvd_5b386b0b.iso|4836911104|CBA4E3F0C66107AD6B64E4DA077D004F|/",
        ws2016: "ed2k://|file|cn_windows_server_2016_vl_x64_dvd_11636695.iso|6302720000|44742A3D464B9765203E2A4DB73FF704|/",
        ws2012: "ed2k://|file|cn_windows_server_2012_r2_with_update_x64_dvd_6052725.iso|5545705472|121EC13B53882E501C1438237E70810D|/",
        ws2008: "ed2k://|file|cn_windows_server_2008_r2_hpc_edition_with_service_pack_1_x64_dvd_700632.iso|3071051776|7FDEE0F7A49FC63148D4DE580D803742|/",
        w1124: "magnet:?xt=urn:btih:809f50f36ff244d6b5fb979c10f3e2c96e8f1837&dn=zh-cn_windows_11_business_editions_version_24h2_updated_march_2025_x64_dvd_55fb1ffa.iso&xl=6868828160",
        w1123: "magnet:?xt=urn:btih:566a91613cfe1c91c8928654ccf6df9f6592c590&dn=zh-cn_windows_11_business_editions_version_23h2_updated_sep_2024_x64_dvd_22316bf2.iso&xl=7094269952",
        w1022: "magnet:?xt=urn:btih:8c4db6dd7ef32332c1720095abd7dde3c84ea6cf&dn=zh-cn_windows_10_business_editions_version_22h2_updated_march_2025_x64_dvd_853aeb12.iso&xl=7006351360",
        w81: "ed2k://|file|cn_windows_8.1_enterprise_with_update_x64_dvd_6050374.iso|4317065216|AC8215A13817CC0EC4EA42E5C92E88B7|/",
        w8: "ed2k://|file|cn_windows_8_x64_dvd_915407.iso|3652950016|5C7F8C212BD3A1827866563773A431C2|/",
        w7: "magnet:?xt=urn:btih:E86414F638E11104248108B155BE9408A8362509&dn=cn_windows_7_ultimate_with_sp1_x64_dvd_u_677408.iso&xl=3420557312",
        wvista: "ed2k://|file|cn_windows_vista_enterprise_with_sp2_x64_dvd_x15-40402.iso|3104415744|D0CF708192BF9596CC603DF53ABDB76D|/",
        wxp: "ed2k://|file|zh-hans_windows_xp_professional_with_service_pack_3_x86_cd_x14-80404.iso|630239232|CD0900AFA058ACB6345761969CBCBFF4|/",
        mc: "magnet:?xt=urn:btih:8FE3D5E14715C6F2C60B6433AF230A281CFDF8DD&dn=macOS Catalina 10.15.7 19H2.dmg&xl=8278775785",
        u20: "magnet:?xt=urn:btih:2aa4f5a7e209e54b32803d43670971c4c8caaa05&dn=ubuntu-24.04-desktop-amd64.iso&xl=6114656256",
        uosv20: "magnet:?xt=urn:btih:A047FE58D2EB679A0C65FB4B591D9749E485124C&dn=uos-20-desktop-amd64.iso",
        dv20: "magnet:?xt=urn:btih:19249591eaebeb02eff633c86071cee65ddd06d0&dn=deepin-desktop-community-20.5-amd64.iso&xl=3478482944",
        c8: "magnet:?xt=urn:btih:9669CE256DDB3667F81D3FE36D857956C423115A&dn=CentOS-8.1.1911-x86_64-boot.iso"
    };

    // 复制对应版本的BT(或ed2k)链接
    // 这里使用了一个对象来存储不同版本的链接
    const magnetLink = magnetLinks[version];
    if (magnetLink) {
        navigator.clipboard.writeText(magnetLink).then(() => {
            document.getElementById('message').textContent = 'BT(或ed2k)已复制';
            setTimeout(() => {
                document.getElementById('message').textContent = '';
            }, 3000);
        }).catch(err => {
            console.error('复制失败:', err);
            document.getElementById('message').textContent = '复制失败';
        });
    } else {
        document.getElementById('message').textContent = '未找到对应的BT磁力链(或ed2k)';
    }
}