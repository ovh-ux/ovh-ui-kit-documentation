import packageJson from "../../package.json";

export default function (VersionsProvider) {
    "ngInject";

    VersionsProvider.setCurrentVersion(`v${packageJson.version}`);
}
