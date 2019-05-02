FROM mcr.microsoft.com/dotnet/core/runtime:2.2

# the publish folder is copied to a folder named bin in the container.
COPY bin/Release/netcoreapp2.2/publish/ bin/

ENTRYPOINT ["dotnet", "bin/Condensate_API.dll"]
